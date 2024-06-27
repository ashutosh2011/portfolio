"use client";
import React, { useEffect, useState } from 'react';
import { ChevronUp, Mail, Github, Linkedin, Code, Database, Cloud, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const skills = [
  { name: 'Programming', icon: <Code className="h-6 w-6" />, description: 'Python, JavaScript, Java, C++, C#, PHP' },
  { name: 'Web Dev', icon: <Code className="h-6 w-6" />, description: 'React, Angular, Node.js, Django, Flask' },
  { name: 'Cloud', icon: <Cloud className="h-6 w-6" />, description: 'AWS, GCP, Azure' },
  { name: 'Data', icon: <Database className="h-6 w-6" />, description: 'SQL, MongoDB, Spark, Hadoop' },
];

const experiences = [
  { 
    company: 'C-DAC, Meity, Govt. of India', 
    role: 'Technical Officer (Scientist B - AISDG)', 
    period: 'March 2022 – Present',
    description: 'Led development of an award winning Gamified Learning application, a LMS system and Pilot Digital Twin project.'
  },
  { 
    company: 'Amazon Web Services', 
    role: 'CSA (Big Data)', 
    period: 'Jan 2021 – Feb 2022',
    description: 'Worked on AWS Big Data services, helping enterprise customers to optimally and efficently utilize AWS Big Data Resources'
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-blue-600 text-white py-20 text-center">
        <Avatar className="h-32 w-32 mx-auto mb-4">
          <AvatarImage src="https://i.imgur.com/QK5g3tK.jpeg" alt="Ashutosh Jha" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2">Ashutosh Jha</h1>
        <p className="text-xl">Software Development Engineer</p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button variant="secondary" size="icon" asChild>
            <a href="mailto:ashutosh201197@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="secondary" size="icon" asChild>
            <a href="https://github.com/ashutosh2011" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="secondary" size="icon" asChild>
            <a href="https://www.linkedin.com/in/ashutosh-jha-582865172/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-center">
                Versatile and accomplished Software Development Engineer with around 3.5 years of experience in developing and managing scalable applications across educational technology, cloud computing, and big data analytics. Committed to continuous learning and delivering cutting-edge solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {skill.icon}
                    <span className="ml-2">{skill.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{exp.company}</CardTitle>
                  <CardDescription>{exp.role} | {exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Project Spotlight</h2>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>ChatSight</CardTitle>
              <CardDescription>WhatsApp Conversation Analyzer</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="https://i.imgur.com/yc2xhpK.png" alt="ChatSight Preview" className="w-full h-64 object-cover rounded-md mb-4" />
              <p>ChatSight is an innovative tool that analyzes WhatsApp conversations and provides fun, insightful statistics. Uncover patterns, track engagement, and gain a deeper understanding of your chat dynamics.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://chatsight.ashuj.com" target="_blank" rel="noopener noreferrer">
                  Visit ChatSight
                </a>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8 text-center">
        <p>&copy; 2024 Ashutosh Jha. All rights reserved.</p>
      </footer>

      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 rounded-full p-2"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}