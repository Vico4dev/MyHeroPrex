from rest_framework import serializers
from django.contrib.auth.models import User
from heros.models import Hero, Joueur, Combat

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = '__all__'

    def create(self, validated_data):
        request = self.context.get('request')
        user = request.user

        # Vérifiez si l'utilisateur est un joueur
        try:
            joueur = Joueur.objects.get(user=user)
        except Joueur.DoesNotExist:
            raise serializers.ValidationError("L'utilisateur n'est pas un joueur enregistré.")

        # Créez le héros
        hero = Hero.objects.create(**validated_data)

        # Associez le héros au joueur
        joueur.heros.add(hero)

        return hero

class JoueurSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    heros = HeroSerializer(many=True, read_only=True)

    class Meta:
        model = Joueur
        fields = '__all__'

class CombatSerializer(serializers.ModelSerializer):
    joueur1 = JoueurSerializer(read_only=True)
    joueur2 = JoueurSerializer(read_only=True)
    hero_joueur1 = HeroSerializer(read_only=True)
    hero_joueur2 = HeroSerializer(read_only=True)
    gagnant = JoueurSerializer(read_only=True)

    class Meta:
        model = Combat
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user