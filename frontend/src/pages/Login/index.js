import React, { useState } from 'react'
import api from '../../services/api'


export default function Login({ history }) {
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await api.post('/session', { email })
    const { _id } = response.data

    localStorage.setItem('user', _id)
    history.push('/dashboard')
  }

  return (
    <>
      <p>Ofereca <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua equipe</p>

      <form onSubmit={handleSubmit} >
        <label htmlFor="email">E-MAIL *</label>
        <input
          id="email"
          type="email"
          placeholder="Ser melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}
