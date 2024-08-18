from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HeroViewSet, JoueurViewSet, CombatViewSet, register_user

router = DefaultRouter()
router.register(r'heros', HeroViewSet)
router.register(r'joueurs', JoueurViewSet)
router.register(r'combats', CombatViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', register_user, name='register'),
]