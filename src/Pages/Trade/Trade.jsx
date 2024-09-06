import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import { CiWarning } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';

const Trade = () => {
  const [symbolOne, setSymbolOne] = useState('');
  const [symbolTwo, setSymbolTwo] = useState('');
  const [symbolOneQty, setSymbolOneQty] = useState();
  const [symbolTwoQty, setSymbolTwoQty] = useState();
  const [symbolOneSide, setSymbolOneSide] = useState();
  const [symbolTwoSide, setSymbolTwoSide] = useState();
  const [entryPrice, setEntryPrice] = useState();
  const [takeProfit, setTakeProfit] = useState();
  const [stopLoss, setStopLoss] = useState();

  const { toast } = useToast();

  const [clients, setClients] = useState([
    {
      id: 1,
      symbolOne: 'ES',
      symbolTwo: 'NQ',
      symbolOneQty: 5,
      symbolTwoQty: 9,
      symbolOneSide: 2,
      symbolTwoSide: 2,
      entryPrice: 3,
      takeProfit: 9,
      stopLoss: 1,
    },
  ]);

  const createClientAction = async () => {
    if (
      !symbolOne ||
      !symbolTwo ||
      !symbolOneQty ||
      !symbolTwoQty ||
      !symbolOneSide ||
      !symbolTwoSide ||
      !entryPrice ||
      !takeProfit ||
      !stopLoss
    ) {
      return toast({
        className: cn(
          'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4',
        ),
        duration: 1000,
        title: 'Warning',
        description: 'All Field Required',
        action: <CiWarning className='text-4xl font-bold text-yellow-500' />,
      });
    }

    const obj = {
      id: clients.length + 1,
      symbolOne: symbolOne,
      symbolTwo: symbolTwo,
      symbolOneQty: Number(symbolOneQty),
      symbolTwoQty: Number(symbolTwoQty),
      symbolOneSide: symbolOneSide,
      symbolTwoSide: symbolTwoSide,
      entryPrice: Number(entryPrice),
      takeProfit: Number(takeProfit),
      stopLoss: Number(stopLoss),
    };

    setClients([...clients, obj]);
    setSymbolOne('');
    setSymbolTwo('');
    setSymbolOneQty('');
    setSymbolTwoQty('');
    setSymbolOneSide('');
    setSymbolTwoSide('');
    setEntryPrice('');
    setTakeProfit('');
    setStopLoss('');
  };

  const deleteClientAction = async (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <>
      <Card className='sm:col-span-2'>
        <CardHeader className='pb-3'>
          <CardTitle>Create Trades</CardTitle>
          <CardDescription className='max-w-lg text-balance leading-relaxed'>
            Introducing Our Dynamic Trade Page for Seamless Management and
            Creating Trades.
          </CardDescription>
          <div className='grid sm:grid-cols-3 gap-3'>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='Symbol One' className='flex items-center'>
                Symbol One
              </Label>
              <Input
                value={symbolOne}
                onChange={(e) => {
                  setSymbolOne(e.target.value);
                }}
                id='Symbol One'
                placeholder={`Enter Symbol One`}
                className='col-span-3'
              />
            </div>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='Symbol Two' className='flex items-center'>
                Symbol Two
              </Label>
              <Input
                value={symbolTwo}
                onChange={(e) => {
                  setSymbolTwo(e.target.value);
                }}
                id='Symbol Two'
                placeholder={`Enter Symbol Two`}
                className='col-span-3'
              />
            </div>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='riskMultiplier' className='flex items-center'>
                Symbol One Qty
              </Label>
              <Input
                value={symbolOneQty}
                onChange={(e) => {
                  setSymbolOneQty(e.target.value);
                }}
                id='Symbol One Qty'
                placeholder={`Enter Symbol One Qty`}
                className='col-span-3'
              />
            </div>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='Symbol Two Qty' className='flex items-center'>
                Symbol Two Qty
              </Label>
              <Input
                value={symbolTwoQty}
                onChange={(e) => {
                  setSymbolTwoQty(e.target.value);
                }}
                id='Symbol Two Qty'
                placeholder={`Enter Symbol Two Qty`}
                className='col-span-3'
              />
            </div>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='Symbol One Side' className='flex items-center'>
                Symbol One Side
              </Label>
              <Input
                value={symbolOneSide}
                onChange={(e) => {
                  setSymbolOneSide(e.target.value);
                }}
                id='Symbol One Side'
                placeholder={`Enter Symbol One Side`}
                className='col-span-3'
              />
            </div>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='Symbol Two Side' className='flex items-center'>
                Symbol Two Side
              </Label>
              <Input
                value={symbolTwoSide}
                onChange={(e) => {
                  setSymbolTwoSide(e.target.value);
                }}
                id='Symbol Two Side'
                placeholder={`Enter Symbol Two Side`}
                className='col-span-3'
              />
            </div>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='Entry Price' className='flex items-center'>
                Entry Price
              </Label>
              <Input
                value={entryPrice}
                onChange={(e) => {
                  setEntryPrice(e.target.value);
                }}
                id='Entry Price'
                placeholder={`Enter Entry Price`}
                className='col-span-3'
              />
            </div>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='Take Profit' className='flex items-center'>
                Take Profit
              </Label>
              <Input
                value={takeProfit}
                onChange={(e) => {
                  setTakeProfit(e.target.value);
                }}
                id='Take Profit'
                placeholder={`Enter Take Profit`}
                className='col-span-3'
              />
            </div>
            <div className='mt-4 grid gap-2'>
              <Label htmlFor='rmstocks' className='flex items-center'>
                Stop Loss
              </Label>
              <Input
                value={stopLoss}
                onChange={(e) => {
                  setStopLoss(e.target.value);
                }}
                id='Stop Loss'
                placeholder={`Enter Stop Loss`}
                className='col-span-3'
              />
            </div>
          </div>
        </CardHeader>
        <CardFooter className='flex justify-end'>
          <Button
            onClick={() => {
              createClientAction(false);
            }}
          >
            Create Trade
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className='px-7'>
          <CardTitle>Trades</CardTitle>
          <CardDescription>Recent Clients Created by you.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol One</TableHead>
                <TableHead className='hidden md:table-cell'>
                  Symbol Two
                </TableHead>
                <TableHead>Symbol One Qty</TableHead>
                <TableHead>Symbol Two Qty</TableHead>
                <TableHead>Symbol One Side</TableHead>
                <TableHead>Symbol Two Side</TableHead>
                <TableHead>Entry Price</TableHead>
                <TableHead>Take Profit</TableHead>
                <TableHead>Stop Loss</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {clients.map((item) => (
                <TableRow className='bg-accent' key={item.symbolOne}>
                  <TableCell>
                    <div className='font-medium'>{item.symbolOne}</div>
                  </TableCell>
                  <TableCell>
                    <div className='font-medium'>{item.symbolTwo}</div>
                  </TableCell>

                  <TableCell className='hidden md:table-cell'>
                    {item.symbolOneQty}
                  </TableCell>
                  <TableCell>{item.symbolTwoQty}</TableCell>
                  <TableCell>{item.symbolOneSide}</TableCell>
                  <TableCell>{item?.symbolTwoSide}</TableCell>
                  <TableCell>{item?.entryPrice}</TableCell>
                  <TableCell>{item?.takeProfit}</TableCell>
                  <TableCell>{item?.stopLoss}</TableCell>
                  <TableCell>
                    <Button
                      variant='outline'
                      className='px-3'
                      onClick={() => {
                        deleteClientAction(item.id);
                      }}
                    >
                      <MdDeleteOutline className='w-4 h-4 text-red-500' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Trade;
