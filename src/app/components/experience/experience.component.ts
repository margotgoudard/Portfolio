import { Component } from '@angular/core';
import { Experience } from '../../interface/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      title: 'Développeuse Front-end Angular - SII Group Spain',
      date: 'Juillet-Août 2023',
      location: 'Barcelone',
      description: 'Développement d\'une application web pour le groupe VOLKSWAGEN, optimisant Angular, TypeScript, HTML et CSS sur Windows. Expertise en déploiement de solutions esthétiques et réactives, guidé par une méthodologie Agile via Jira pour une exécution efficace et collaborative.'
    },
    {
      title: 'Conseillère de Vente - Intersport',
      date: 'Juillet-Août 2022',
      location: 'Balaruc',
      description: 'Développement des compétences telles que le travail d\'équipe, l\'adaptabilité et la résolution proactive de problèmes, en anticipant les besoins des clients et en contribuant à un environnement de travail collaboratif et productif.'
    },
    {
      title: 'Employée Polyvalente - LIDL',
      date: 'Juin-Août 2021',
      location: 'Sète',
      description: 'Gestion de l\'encaissement des produits distinguée par une communication claire et patiente, essentielle pour assurer la satisfaction de chaque client. Capacité à travailler efficacement sous pression, tout en maintenant une attitude calme et professionnelle.'
    }
  ];

  currentExperience: Experience | null = null;

  setCurrentExperience(experience: Experience | null): void {
    this.currentExperience = experience;
  }

}
