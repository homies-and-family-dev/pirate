"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Check, Calendar, Building, Anchor, Ship } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SeparatorTop from "@/components/ui/SeparatorTop";

export default function Contact() {
    const router = useRouter();
    
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        contactTime: "",
        acceptTerms: false
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        
        try {
            // Preparar los datos para la API
            const apiData = {
                name: formData.fullName,
                email: formData.email,
                phone_number: formData.phone.replace(/[^0-9]/g, ''), // Eliminar caracteres no numéricos
                city: "", // No tenemos campo de ciudad en el formulario
                comment: `Horario de contacto preferido: ${getContactTimeLabel(formData.contactTime)}`,
                projectId: "NJfMd0HoLa9b6pATjB2n/EijbFRBqX/6QLPvzfnmIG-GREqhZMebO7abbCk6Kz5k", // ID de Pirate Paradise
                origin: typeof window !== 'undefined' ? window.location.href : "pagina.web"
            };
            
            // Enviar datos a la API
            const response = await fetch("http://api.smart-home.com.co/api/LeadForm/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiData),
            });
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            
            const result = await response.text();
            console.log("Respuesta de la API:", result);
            
            // Mostrar mensaje de éxito brevemente antes de redireccionar
            setFormSubmitted(true);
            
            // Redireccionar a la página de agradecimiento después de un breve retraso
            setTimeout(() => {
                router.push("/gracias");
            }, 1000);
            
        } catch (err) {
            console.error("Error al enviar el formulario:", err);
            setError("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.");
            setIsSubmitting(false);
        }
    };
    
    // Función para obtener la etiqueta del horario de contacto
    const getContactTimeLabel = (value: string): string => {
        const option = contactTimeOptions.find(opt => opt.value === value);
        return option ? option.label : "No especificado";
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const officeLocations = [
        {
            name: "Sede Principal Ibagué",
            address: "Cra 5 Sur #83-40 local 8",
            image: "/images/sedes/florida.webp",
            hours: "Lunes a Viernes: 9:00 AM - 5:00 PM\nSábados: 9:00 AM - 1:00 PM"
        },
        {
            name: "Oficina Comercial Bogotá",
            address: "Calle 90# 11A-04",
            image: "/images/sedes/chicho.webp",
            hours: "Lunes a Viernes: 9:00 AM - 5:00 PM"
        },
        {
            name: "Call Center Bogotá",
            address: "Carrera 15# 93A - 84 Oficina 406",
            image: "/images/sedes/callcenter.webp",
            hours: "Lunes a Viernes: 9:00 AM - 5:00 PM"
        },
        {
            name: "Isla de atención en Prado Tolima",
            address: "Isla de atención en muelle",
            image: "/images/sedes/prado.webp",
            hours: "Jueves a Domingo: 10:00 AM - 7:00 PM"
        }
    ];

    const contactTimeOptions = [
        { value: "", label: "Seleccione un horario" },
        { value: "morning", label: "Mañana (8:00 AM - 12:00 PM)" },
        { value: "afternoon", label: "Tarde (12:00 PM - 5:00 PM)" },
        { value: "evening", label: "Noche (5:00 PM - 8:00 PM)" }
    ];

    return (
        <>
        <SeparatorTop />
        <section id="contacto" className="py-16 overflow-hidden bg-gradient-to-b from-[#e4d4b9] to-[#efe1cb] relative">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-12 z-10 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 z-10 opacity-30"></div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
                <Ship className="w-32 h-32 text-[#8B4513]" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block">
                <Anchor className="w-32 h-32 text-[#8B4513]" />
            </div>
            
            <div className="container mx-auto px-4 relative z-20">
                {/* Título principal con decoración */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        <Phone className="text-[#bd8d4c] absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                        <h2 className="text-4xl md:text-5xl font-pirate text-[#8B4513] relative z-10 inline-block">
                            Contáctanos
                        </h2>
                        <Mail className="text-[#bd8d4c] absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-70" size={24} />
                    </div>
                    <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-[#bd8d4c] to-transparent mt-4"></div>
                    <p className="text-[#5A3921] mt-4 max-w-2xl mx-auto font-serif">
                        Estamos listos para atender tus consultas y ayudarte a encontrar la mejor opción de inversión en Pirate Paradise.
                    </p>
                </motion.div>
                
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                        {/* Formulario de contacto */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            variants={fadeIn}
                            className="lg:col-span-2 bg-[#f5ecd9] rounded-xl overflow-hidden shadow-lg border border-[#bd8d4c]/20 relative"
                        >
                            {/* Borde decorativo superior */}
                            <div className="h-2 bg-gradient-to-r from-[#bd8d4c]/30 via-[#bd8d4c] to-[#bd8d4c]/30"></div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-pirate text-[#8B4513] mb-6 flex items-center">
                                    <Calendar className="w-6 h-6 mr-2 text-[#bd8d4c]" />
                                    Solicita Información
                                </h3>
                                
                                {formSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-start">
                                        <Check className="w-5 h-5 mr-3 mt-0.5 text-green-600" />
                                        <div>
                                            <p className="font-medium">¡Gracias por contactarnos!</p>
                                            <p className="text-sm mt-1">Nos pondremos en contacto contigo lo antes posible en el horario seleccionado.</p>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {error && (
                                            <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-sm">
                                                {error}
                                            </div>
                                        )}
                                        
                                        <div className="relative">
                                            <label htmlFor="fullName" className="block text-[#5A3921] text-sm font-medium mb-1">
                                                Nombre y Apellidos
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-[#bd8d4c]/30 bg-[#f9f4e8] focus:outline-none focus:ring-2 focus:ring-[#bd8d4c]/50 transition-all duration-300"
                                                placeholder="Ingresa tu nombre completo"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        
                                        <div className="relative">
                                            <label htmlFor="email" className="block text-[#5A3921] text-sm font-medium mb-1">
                                                Correo Electrónico
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-[#bd8d4c]/30 bg-[#f9f4e8] focus:outline-none focus:ring-2 focus:ring-[#bd8d4c]/50 transition-all duration-300"
                                                placeholder="ejemplo@correo.com"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        
                                        <div className="relative">
                                            <label htmlFor="phone" className="block text-[#5A3921] text-sm font-medium mb-1">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-[#bd8d4c]/30 bg-[#f9f4e8] focus:outline-none focus:ring-2 focus:ring-[#bd8d4c]/50 transition-all duration-300"
                                                placeholder="+57 321 354 0517"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        
                                        <div className="relative">
                                            <label htmlFor="contactTime" className="block text-[#5A3921] text-sm font-medium mb-1">
                                                Horario de Contacto Preferido
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="contactTime"
                                                    name="contactTime"
                                                    value={formData.contactTime}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2 rounded-lg border border-[#bd8d4c]/30 bg-[#f9f4e8] focus:outline-none focus:ring-2 focus:ring-[#bd8d4c]/50 appearance-none transition-all duration-300"
                                                    disabled={isSubmitting}
                                                >
                                                    {contactTimeOptions.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                    <Clock className="w-4 h-4 text-[#bd8d4c]" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start mt-4 bg-[#f9f4e8]/50 p-3 rounded-lg border border-[#bd8d4c]/10">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="acceptTerms"
                                                    name="acceptTerms"
                                                    type="checkbox"
                                                    checked={formData.acceptTerms}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-4 h-4 text-[#bd8d4c] border-[#bd8d4c]/30 rounded focus:ring-[#bd8d4c]/50"
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                            <label htmlFor="acceptTerms" className="ml-2 text-sm text-[#5A3921]">
                                                Acepto los <Link href="/terminos" className="text-[#bd8d4c] hover:underline">términos y condiciones</Link> y la política de tratamiento de datos personales.
                                            </label>
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            className={`w-full bg-[#bd8d4c] hover:bg-[#a57a3b] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <Calendar className="w-5 h-5 mr-2" />
                                                    Solicitar Contacto
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                        
                        {/* Sedes de atención */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={fadeIn}
                            className="lg:col-span-3"
                        >
                            <h3 className="text-2xl font-pirate text-[#8B4513] mb-6 flex items-center">
                                <Building className="w-6 h-6 mr-2 text-[#bd8d4c]" />
                                Nuestras Sedes
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {officeLocations.map((office, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        className="bg-[#f5ecd9] rounded-xl overflow-hidden shadow-lg border border-[#bd8d4c]/20 h-full flex flex-col hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="h-40 relative">
                                            <Image
                                                src={office.image}
                                                alt={office.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                                <h4 className="p-3 text-white font-pirate text-lg">{office.name}</h4>
                                            </div>
                                        </div>
                                        <div className="p-4 flex-grow">
                                            <div className="space-y-3 text-sm text-[#5A3921]">
                                                <div className="flex items-start">
                                                    <MapPin className="w-4 h-4 text-[#bd8d4c] mt-0.5 mr-2 flex-shrink-0" />
                                                    <span>{office.address}</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <Clock className="w-4 h-4 text-[#bd8d4c] mt-0.5 mr-2 flex-shrink-0" />
                                                    <span className="whitespace-pre-line">{office.hours}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
