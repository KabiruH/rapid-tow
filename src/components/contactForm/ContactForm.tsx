'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import emailjs from '@emailjs/browser'
import { toast, Toaster } from 'sonner'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const loadingToast = toast.loading('Sending your message...')

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'kelvin@rapidtowandrecovery.com'
      }

      const response = await emailjs.send(
        process.env.SERVICE_ID!, 
        process.env.TEMPLATE_ID!,
        templateParams,
        process.env.PUBLIC_KEY! 
    );
    

      if (response.status === 200) {
        // Reset form
        toast.dismiss(loadingToast)
        toast.success('Message sent successfully! We\'ll get back to you soon.', {
          duration: 5000,
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        toast.success('Thank you for your message. We will get back to you soon!')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.dismiss('There was an error submitting your message. Please try again.')
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
       <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            backdropFilter: 'blur(8px)',
          },
        }}
      />
  
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
    </div>
  )
}