import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { Button } from '@/components/ui/button';
import { GripHorizontal, Calculator as CalculatorIcon, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);

  const scientificFunctions = {
    sin: (x: number) => Math.sin(x),
    cos: (x: number) => Math.cos(x),
    tan: (x: number) => Math.tan(x),
    sqrt: (x: number) => Math.sqrt(x),
    pow2: (x: number) => Math.pow(x, 2),
    log: (x: number) => Math.log10(x),
    ln: (x: number) => Math.log(x),
  };

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setMemory(display + op);
    setIsNewNumber(true);
  };

  const handleScientific = (func: keyof typeof scientificFunctions) => {
    const num = parseFloat(display);
    const result = scientificFunctions[func](num);
    setDisplay(result.toString());
    setIsNewNumber(true);
  };

  const calculate = () => {
    try {
      const result = eval(memory + display);
      setDisplay(result.toString());
      setMemory('');
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setIsNewNumber(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setMemory('');
    setIsNewNumber(true);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = (e: any, data: any) => {
    setIsDragging(false);
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable
      handle=".handle"
      nodeRef={nodeRef}
      position={position}
      onStart={handleDragStart}
      onStop={handleDragStop}
      defaultPosition={{ x: 0, y: 0 }}
    >
      <div 
        ref={nodeRef}
        className={cn(
          "fixed bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200",
          "will-change-transform z-50",
          isDragging ? "cursor-grabbing transition-none" : "cursor-grab transition-all duration-300 ease-in-out",
          isMinimized ? "w-12 h-12" : "w-[280px]"
        )}
        style={{
          touchAction: 'none',
          bottom: '1rem',
          right: '1rem'
        }}
      >
        <div className={cn(
          "handle flex items-center justify-between p-2 bg-gray-100/80 rounded-t-lg",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}>
          <div className="flex items-center gap-2">
            <GripHorizontal className="w-4 h-4 text-gray-500" />
            {!isMinimized && <span className="text-sm font-medium select-none">Calculator</span>}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={toggleMinimize}
          >
            {isMinimized ? (
              <div className="flex items-center gap-1">
                <CalculatorIcon className="h-4 w-4" />
              </div>
            ) : (
              <Minimize2 className="h-4 w-4" />
            )}
          </Button>
        </div>

        {!isMinimized && (
          <div className="p-2">
            <div className="bg-gray-50 p-2 rounded-md mb-2 text-right text-xl font-mono select-none">
              {display}
            </div>
            <div className="grid grid-cols-4 gap-1">
              {/* Scientific Functions */}
              <Button variant="secondary" size="sm" className="text-xs p-1 select-none" onClick={() => handleScientific('sin')}>sin</Button>
              <Button variant="secondary" size="sm" className="text-xs p-1 select-none" onClick={() => handleScientific('cos')}>cos</Button>
              <Button variant="secondary" size="sm" className="text-xs p-1 select-none" onClick={() => handleScientific('tan')}>tan</Button>
              <Button variant="secondary" size="sm" className="text-xs p-1 select-none" onClick={() => handleScientific('sqrt')}>√</Button>
              
              <Button variant="secondary" size="sm" className="text-xs p-1 select-none" onClick={() => handleScientific('pow2')}>x²</Button>
              <Button variant="secondary" size="sm" className="text-xs p-1 select-none" onClick={() => handleScientific('log')}>log</Button>
              <Button variant="secondary" size="sm" className="text-xs p-1 select-none" onClick={() => handleScientific('ln')}>ln</Button>
              <Button variant="destructive" size="sm" className="text-xs p-1 select-none" onClick={clear}>C</Button>
              
              {/* Numbers and Basic Operators */}
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('7')}>7</Button>
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('8')}>8</Button>
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('9')}>9</Button>
              <Button variant="secondary" size="sm" className="text-sm p-1 select-none" onClick={() => handleOperator('/')}>÷</Button>
              
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('4')}>4</Button>
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('5')}>5</Button>
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('6')}>6</Button>
              <Button variant="secondary" size="sm" className="text-sm p-1 select-none" onClick={() => handleOperator('*')}>×</Button>
              
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('1')}>1</Button>
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('2')}>2</Button>
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('3')}>3</Button>
              <Button variant="secondary" size="sm" className="text-sm p-1 select-none" onClick={() => handleOperator('-')}>−</Button>
              
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('0')}>0</Button>
              <Button size="sm" className="text-sm p-1 select-none" onClick={() => handleNumber('.')}>.</Button>
              <Button variant="secondary" size="sm" className="text-sm p-1 select-none" onClick={calculate}>=</Button>
              <Button variant="secondary" size="sm" className="text-sm p-1 select-none" onClick={() => handleOperator('+')}>+</Button>
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Calculator;