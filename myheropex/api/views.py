from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from heros.models import Hero, Joueur, Combat
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import HeroSerializer, JoueurSerializer, CombatSerializer, UserSerializer

class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class JoueurViewSet(viewsets.ModelViewSet):
    queryset = Joueur.objects.all()
    serializer_class = JoueurSerializer
    permission_classes = [IsAuthenticated]

class CombatViewSet(viewsets.ModelViewSet):
    queryset = Combat.objects.all()
    serializer_class = CombatSerializer
    permission_classes = [IsAuthenticated]


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        if user:
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)