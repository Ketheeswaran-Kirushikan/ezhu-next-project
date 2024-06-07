'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from './button'
import { Input } from './input'
import logo from '../../assets/logo1.png' // Update the path to your logo file
import { Home, MessageCircleIcon, Moon, Search, Sun, User, Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import '../../app/styles.css'

type Props = {}

const Navbar = (props: Props) => {
  const { setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className=' mx-auto max-w-screen-xl min-w-full pl-10 pr-10'>
      <div className='flex items-center py-4 gap-10 justify-between'>
        <Image src={logo} alt='logo-image' width={100} height={100} />
        <div className='flex items-center gap-4 w-full max-w-lg'>
          <Input placeholder='Search...' type='text' className='w-full' />
          <Button size='icon' variant='ghost' className='button-ghost'>
            <Search className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
          </Button>
        </div>
        <div className='hidden lg:flex items-center py-4 gap-10 justify-between'>
          <Button size='icon' variant='ghost' className='button-ghost'>
            <Home className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
          </Button>
          <Button size='icon' variant='ghost' className='button-ghost'>
            <MessageCircleIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size='icon' variant='ghost' className='button-ghost'>
                <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                <span className='sr-only'>Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='dropdown-item'>
              <DropdownMenuItem onClick={() => setTheme('light')} className='dropdown-item'>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className='dropdown-item'>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')} className='dropdown-item'>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className='flex items-center py-2 gap-3 justify-between'>
            <h3>Kirushikan</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size='icon' variant='ghost' className='button-ghost'>
                  <User className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='dropdown-item'>
                <DropdownMenuItem className='dropdown-item'>Profile</DropdownMenuItem>
                <DropdownMenuItem className='dropdown-item'>Settings</DropdownMenuItem>
                <DropdownMenuItem className='dropdown-item'>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className='lg:hidden'>
          <Button size='icon' variant='ghost' className='button-ghost' onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className='h-[1.5rem] w-[1.5rem]' />
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className='lg:hidden'>
          <div className='flex flex-col items-start gap-4 p-4'>
            <Button size='icon' variant='ghost' className='button-ghost'>
              <Home className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
            </Button>
            <Button size='icon' variant='ghost' className='button-ghost'>
              <MessageCircleIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size='icon' variant='ghost' className='button-ghost'>
                  <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                  <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                  <span className='sr-only'>Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='dropdown-item'>
                <DropdownMenuItem onClick={() => setTheme('light')} className='dropdown-item'>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')} className='dropdown-item'>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')} className='dropdown-item'>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className='flex items-center gap-3'>
              <h3>Kirushikan</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost' className='button-ghost'>
                    <User className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='dropdown-item'>
                  <DropdownMenuItem className='dropdown-item'>Profile</DropdownMenuItem>
                  <DropdownMenuItem className='dropdown-item'>Settings</DropdownMenuItem>
                  <DropdownMenuItem className='dropdown-item'>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
