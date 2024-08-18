from django.db import models
from django.contrib.auth.models import User

class Hero(models.Model):
    nom = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    niveau = models.IntegerField(default=1)
    points_de_vie = models.IntegerField()
    attaque = models.IntegerField()
    defense = models.IntegerField()
    vitesse = models.IntegerField()

    def __str__(self):
        return self.nom

class Joueur(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    heros = models.ManyToManyField(Hero)
    experience = models.IntegerField(default=0)
    niveau = models.IntegerField(default=1)

    def __str__(self):
        return self.user.username

class Combat(models.Model):
    joueur1 = models.ForeignKey(Joueur, on_delete=models.CASCADE, related_name='combats_joueur1')
    joueur2 = models.ForeignKey(Joueur, on_delete=models.CASCADE, related_name='combats_joueur2')
    hero_joueur1 = models.ForeignKey(Hero, on_delete=models.CASCADE, related_name='combats_hero1')
    hero_joueur2 = models.ForeignKey(Hero, on_delete=models.CASCADE, related_name='combats_hero2')
    date_debut = models.DateTimeField(auto_now_add=True)
    date_fin = models.DateTimeField(null=True, blank=True)
    gagnant = models.ForeignKey(Joueur, on_delete=models.SET_NULL, null=True, related_name='combats_gagnes')

    def __str__(self):
        return f"Combat entre {self.joueur1} et {self.joueur2}"