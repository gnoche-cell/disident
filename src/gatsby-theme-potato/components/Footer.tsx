import React, { FC, useCallback } from 'react'

const ChangeThemeButton: FC<{ newTheme: 'light' | 'dark' }> = ({
  newTheme,
  children
}) => {
  const changeTheme = useCallback(() => {
    ;(window as any).__theme = newTheme
  }, [])
  return (
    <button className="link" onClick={changeTheme}>
      {children}
    </button>
  )
}

const Footer: FC = () => {
  return (
    <>
      Todos los derechos revocados. Ver el sitio:{' '}
      <ChangeThemeButton newTheme="light">claro</ChangeThemeButton>{' u '}
      <ChangeThemeButton newTheme="dark">obscuro</ChangeThemeButton>{'.'}
    </>
  )
}

export default Footer
