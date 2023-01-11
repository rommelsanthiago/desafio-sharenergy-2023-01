import { useState } from 'react'
import { Target, User } from '../types/user';

 export const useForm = (initialState: User) => {
  const [form, setForm] = useState(initialState)

  const onChange = (event: { target: Target }) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const clean = () => {
    setForm(initialState)
  }

  return { form, onChange, clean}
}

export default useForm;