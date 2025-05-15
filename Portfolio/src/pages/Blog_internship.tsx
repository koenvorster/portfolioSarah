import React from "react";
import BlogTemplate from "@/pages/BlogTemplate";

const BlogDetailPage: React.FC = () => {
  return (
    <BlogTemplate
      title="Mijn Erasmus Stage in Beja, Portugal"
      image="/src/assets/img/foto/Blog/IPBejaStage.jpg"
      content="Afgelopen maanden heb ik het voorrecht gehad om mijn Erasmus-stage te doen in Beja, Portugal. Het was een avontuur dat ik niet snel zal vergeten, zowel professioneel als persoonlijk. Toen ik aankwam als een vreemde, had ik geen idee dat ik zou vertrekken met het gevoel dat Beja mijn tweede thuis was geworden.

Een nieuwe cultuur ontdekken

Tijdens mijn tijd in Portugal had ik de kans om een nieuwe cultuur te ontdekken, lokale producten te leren kennen en mijn talenkennis verder te verbeteren. Ik ontmoette fantastische mensen, zowel op persoonlijk als professioneel vlak. Mijn collega's in Beja waren ontzettend gastvrij en behulpzaam, wat mijn ervaring daar nog specialer maakte. Bovendien heb ik veel geleerd over de Portugese manier van werken, wat mijn perspectief op de wereld heeft verbreed.

Mijn project: Watermeting en data-analyse

Mijn stage draaide om het ontwikkelen van een webapplicatie voor het beheren van watermeetdata. De app verzamelt en slaat gegevens op in een gestructureerde PostgreSQL-database en visualiseert deze gegevens op interactieve dashboards. Het was mijn taak om sensor data om te zetten in bruikbare inzichten voor gebruikers. Deze app stelde gebruikers in staat om gegevens te doorzoeken, te filteren en te analyseren via grafieken en meters.

De technologieën die ik gebruikte

Voor dit project maakte ik gebruik van een reeks technologieën, waaronder Python en Django voor de back-endlogica, PostgreSQL voor de gegevensopslag, en Grafana voor de visualisatie van gegevens. Ik heb ook Docker gebruikt om ervoor te zorgen dat de applicatie consistent werkt over verschillende omgevingen. Het was een geweldige ervaring om deze tools in de praktijk te gebruiken en mijn kennis van softwareontwikkeling te verdiepen.

Cypress voor frontend testen

Naast de ontwikkeling van de applicatie was ik ook verantwoordelijk voor het automatiseren van de tests voor de gebruikersinterface. Dit deed ik met Cypress, wat ervoor zorgt dat de gebruikersinterface correct reageert op acties van de gebruiker. Het was fantastisch om te zien hoe snel ik feedback kreeg over de werking van de applicatie en het gaf me de kans om mijn vaardigheden in testautomatisering verder te ontwikkelen.

Groei als ontwikkelaar en als persoon

Deze stage in Beja was niet alleen een kans om mijn technische vaardigheden te verbeteren, maar ook om persoonlijk te groeien. Ik heb veel geleerd over het werken in een internationale omgeving, het omgaan met uitdagingen en het verbeteren van mijn communicatievaardigheden. Het was een ervaring die me niet alleen een beter ontwikkelaar heeft gemaakt, maar ook een meer zelfverzekerd persoon.

Al met al was mijn Erasmus-stage in Beja een ongelooflijke reis, die me niet alleen als ontwikkelaar heeft gevormd, maar me ook de kans gaf om een nieuwe cultuur te omarmen, nieuwe mensen te ontmoeten en mijn passie voor technologie verder te ontwikkelen. Ik ben dankbaar voor de kans om deze ervaring te hebben gehad en ik ben ervan overtuigd dat deze stage een belangrijke stap is geweest in mijn carrière als ontwikkelaar."
      author="Sarah Jansen"
      date="Mei 18, 2025"
    />
  );
};

export default BlogDetailPage;