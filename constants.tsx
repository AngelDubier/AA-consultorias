
import React from 'react';
import { 
  ClipboardCheck, 
  ShieldAlert, 
  FileText, 
  Users, 
  Construction, 
  Factory, 
  Truck, 
  ShoppingBag, 
  Utensils, 
  Briefcase,
  Wrench,
  Activity,
  Search,
  CheckCircle,
  Zap,
  Leaf,
  Monitor,
  Building
} from 'lucide-react';
import { ServiceCard, SectorItem, ProcessPhase, FAQItem } from './types';

export const WHATSAPP_NUMBER = "573028177727";
export const WHATSAPP_MESSAGE = encodeURIComponent("Hola, soy [Nombre]. Estoy en Medellín. Quiero implementar o actualizar el SG-SST en mi empresa. Sector: [Sector]. Nº de trabajadores: [#]. ¿Me compartes una cotización y tiempos?");
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const SERVICES: ServiceCard[] = [
  {
    title: "Diagnóstico inicial del SG-SST",
    description: "Evaluación exhaustiva del cumplimiento normativo actual bajo la Res. 0312 de 2019.",
    icon: "ClipboardCheck"
  },
  {
    title: "Implementación y gestión del SG-SST",
    description: "Desarrollo y puesta en marcha del sistema de gestión adaptado a tu empresa.",
    icon: "FileText"
  },
  {
    title: "Capacitaciones en SST",
    description: "Sensibilización y formación técnica para todo el personal de la organización.",
    icon: "Users"
  },
  {
    title: "Inspecciones de seguridad y reportes técnicos",
    description: "Identificación, evaluación y valoración de riesgos para establecer controles efectivos.",
    icon: "Search"
  },
  {
    title: "Acompañamiento ante auditorías y visitas de la ARL/Ministerio",
    description: "Asesoría técnica y respaldo durante procesos de revisión y auditoría.",
    icon: "ShieldAlert"
  },
  {
    title: "Seguimiento y mejora continua",
    description: "Monitoreo constante para garantizar la efectividad y evolución del sistema.",
    icon: "CheckCircle"
  }
];

export const SECTORS: SectorItem[] = [
  { name: "Industrial", icon: "Factory" },
  { name: "Construcción", icon: "Construction" },
  { name: "Comercial", icon: "ShoppingBag" },
  { name: "Transporte", icon: "Truck" },
  { name: "Aseo", icon: "Briefcase" },
  { name: "Salud", icon: "Activity" },
  { name: "Educación", icon: "Users" },
  { name: "Agroindustrial", icon: "Leaf" },
  { name: "Energía", icon: "Zap" },
  { name: "Telecomunicaciones", icon: "Monitor" },
  { name: "Oficinas", icon: "Building" }
];

export const PROCESS: ProcessPhase[] = [
  {
    title: "Fase 1: Diagnóstico",
    duration: "Mes 1",
    description: "Levantamiento de información y diagnóstico de estándares mínimos.",
    deliverables: ["Informe diagnóstico", "Plan de trabajo inicial"]
  },
  {
    title: "Fase 2: Diseño Documental",
    duration: "Mes 2",
    description: "Creación de matrices (Legal, Riesgos) y documentación estratégica.",
    deliverables: ["Matriz GTC 45", "Matriz Legal", "Definición de Política/Objetivos"]
  },
  {
    title: "Fase 3: Implementación",
    duration: "Mes 3",
    description: "Capacitaciones, puesta en marcha de programas y cierre.",
    deliverables: ["Registro de capacitaciones", "Entrega de Manual SG-SST", "Informe final"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto tarda la implementación?",
    answer: "Depende del tamaño y riesgo, pero el ciclo básico se estructura en 3 meses."
  },
  {
    question: "¿Qué pasa si ya tengo documentación?",
    answer: "Realizamos una auditoría para actualizarla y alinearla a la norma vigente."
  },
  {
    question: "¿El servicio incluye capacitaciones?",
    answer: "Sí, están integradas dentro del plan de implementación y mantenimiento."
  },
  {
    question: "¿Acompañan el reporte ante el Ministerio?",
    answer: "Sí, brindamos acompañamiento técnico en auditorías y requerimientos legales."
  },
  {
    question: "¿El valor varía por sector?",
    answer: "Sí, la inversión se ajusta según el nivel de riesgo (I al V) y el número de trabajadores."
  }
];
