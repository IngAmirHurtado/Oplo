import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const today = new Date();

  // Verificar si la fecha es hoy
  const isToday = 
    newDate.getDate() === today.getDate() &&
    newDate.getMonth() === today.getMonth() &&
    newDate.getFullYear() === today.getFullYear();

  if (isToday) {
    // Formatear solo horas y minutos
    return newDate.toLocaleString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // Formatear con mes, día, horas y minutos
  return newDate.toLocaleString("es-ES", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
