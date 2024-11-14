import React, { useState } from 'react';
import { CartItem } from './AddToCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2).max(30),
  email: z.string().email(),
  message: z.string().optional(),
});

export default function CartDetails({
  cart,
  onClose,
}: {
  cart: CartItem[];
  onClose: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setSubmitting(true);

      const payload = {
        name: values.name,
        message: values.message ?? ``,
        services: cart,
      };

      await fetch(`api/email/lead`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      toast('Email received, will get back to you soon!');
    } catch (err) {
      console.log('err while submitting form', err);
      toast('Some error occured, please try again later.');
    } finally {
      setSubmitting(false);
      onClose();
    }
  }

  const total = () => {
    let t = 0;
    cart.forEach((item) => {
      const amt = Number(item.finalPrice);
      t += amt;
    });

    return t;
  };

  return (
    <div className='px-4'>
      <h1 className='text-xl font-bold'>Let’s Connect!</h1>
      <div className='my-4 flex flex-col gap-2 p-4 border-zinc-400 border border-dashed rounded-lg'>
        {cart?.map((item, i) => (
          <div className='italic' key={i}>
            {item.title}
          </div>
        ))}
        <p className='italic'>
          Approx costs: <span className='font-bold'>$ {total()}</span>
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name*</FormLabel>
                <FormControl>
                  <Input disabled={submitting} placeholder='Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    disabled={submitting}
                    type='email'
                    placeholder='Email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={submitting}
                    placeholder='Message'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Any additional message you want to send
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <Button
          className='mt-8'
          onClick={form.handleSubmit(onSubmit)}
          type='submit'
          disabled={submitting}
        >
          {submitting ? `Sending...` : `Send`}
        </Button>
      </Form>
    </div>
  );
}
