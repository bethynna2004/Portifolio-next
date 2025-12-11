"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"   // <-- IMPORT NECESSÁRIO

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  message: z.string().min(10, { message: "A mensagem deve ter no mínimo 10 caracteres" }),
  contact: z.string().min(1, { message: "O contato deve ter no mínimo 1 caractere" }).max(9)
})

export  default function ProfileForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      contact: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("SUBMETEU!")
    console.log(values)
    alert("Formulário enviado! Veja no console.")
  }

  return (
   <div className="p-8 bg-gradient-to-r from-blue-950 to-blue-300 h-200 w-full text-white ">
    <div className="max-w-md mx-auto"  >
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        {/* NAME */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Seu e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CONTACT */}
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contato</FormLabel>
              <FormControl>
                <Input placeholder="Telefone ou celular" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* MESSAGE — textarea */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Escreva sua mensagem..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
    </div>
   </div>
  )
}
