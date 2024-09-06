import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  ChartCandlestick,
  ShoppingCart,
  SquareUser,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import Trade from '../../Pages/Trade/Trade';

export function DashboardLayout() {
  const [page, setPage] = useState('trade');

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
        <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <a
            href='#'
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
          >
            <ChartCandlestick className='h-6 w-6' />
            <span className='sr-only'>Trade</span>
          </a>

          <a
            onClick={() => setPage('trade')}
            href='#'
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
              {
                'bg-muted text-primary': page === 'trade',
                'text-muted-foreground': page !== 'trade',
              },
            )}
          >
            <SquareUser className='h-4 w-4' />
            Trade{' '}
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <nav className='grid gap-6 text-lg font-medium'>
              <a
                href='#'
                className='mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground'
              >
                <ShoppingCart className='h-5 w-5' />
                Trade
                <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                  6
                </Badge>
              </a>
              <a
                href='#'
                className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
              >
                <Users className='h-5 w-5' />
                Clients
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
        {page === 'trade' && <Trade />}
      </main>
    </div>
  );
}
