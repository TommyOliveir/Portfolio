import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ContactItemsStyled, ContactTextStyled, FormStyled } from './styles'

// Define the shape of form data
interface ContactFormInputsProps {
  firstName: string
  lastName: string
  email: string
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputsProps>()

  const onSubmit: SubmitHandler<ContactFormInputsProps> = (data) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <Box sx={{ bgcolor: 'primary.light', p: 4 }} id="contact">
      <Typography variant="h4" component="h1" marginTop={4}>
        <TypeAnimation sequence={['Contact']} wrapper="span" speed={50} />
      </Typography>

      <ContactItemsStyled>
        <ContactTextStyled>
          <Typography variant="h4" component="h2" sx={{ color: 'primary.main' }}>
            Get in Touch!
          </Typography>
          <Typography marginTop={2} sx={{ fontWeight: 'light' }}>
            Let’s connect! Whether it’s a question or just a hello, we’re all ears.
          </Typography>
          <Typography marginTop={2} sx={{ fontWeight: 'light' }}>
            laridatommy@gmail.com
          </Typography>
        </ContactTextStyled>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="First name" {...register('firstName', { required: true, maxLength: 80 })} />
          {errors.firstName && <span>First name is required</span>}

          <input type="text" placeholder="Last name" {...register('lastName', { required: true, maxLength: 100 })} />
          {errors.lastName && <span>Last name is required</span>}

          <input type="email" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Enter a valid email address</span>}
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormStyled>
      </ContactItemsStyled>
    </Box>
  )
}
