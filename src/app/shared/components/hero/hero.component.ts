import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

type Certification = {
  imgSrc: string;
  alt: string;
  verifyUrl: string;
};

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  readonly certifications: Certification[] = [
    {
      imgSrc: '/certifications/aws-certified-solutions-architect-associate.png',
      alt: 'AWS Certified Solutions Architect – Associate',
      verifyUrl: 'https://www.credly.com/badges/174fe264-98bf-48c4-977e-f0aa2adc62e3/public_url',
    },
    {
      imgSrc: '/certifications/aws-certified-developer-associate.png',
      alt: 'AWS Certified Developer – Associate',
      verifyUrl: 'https://www.credly.com/badges/89375c15-7a60-4f2a-a932-232217b6924f/public_url',
    },
    {
      imgSrc: '/certifications/aws-certified-ai-practitioner.png',
      alt: 'AWS Certified AI Practitioner',
      verifyUrl: 'https://www.credly.com/badges/b2ce5540-bd83-4ad4-8002-ecebadd3da48/public_url',
    },
    {
      imgSrc: '/certifications/hashicorp-certified-terraform-associate-003.png',
      alt: 'HashiCorp Certified: Terraform Associate (003)',
      verifyUrl: 'https://www.credly.com/badges/d7b7393a-5994-4a80-9f02-372567729266/public_url',
    },
    {
      imgSrc: '/certifications/spring-certified-professional-2024-v2.png',
      alt: 'Spring Certified Professional 2024',
      verifyUrl: 'https://www.credly.com/badges/72f1e102-35b9-4542-b7c7-305527d0ce2c/public_url',
    },
  ];
}

