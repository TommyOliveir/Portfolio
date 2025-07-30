import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import { useForm, SubmitHandler } from 'react-hook-form'

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}
      >
        <input type="text" placeholder="First name" {...register('firstName', { required: true, maxLength: 80 })} />
        {errors.firstName && <span>First name is required</span>}

        <input type="text" placeholder="Last name" {...register('lastName', { required: true, maxLength: 100 })} />
        {errors.lastName && <span>Last name is required</span>}

        <input type="email" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Enter a valid email address</span>}

        <input type="submit" />
      </form>
    </Box>
  )
}
