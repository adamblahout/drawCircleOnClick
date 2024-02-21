import { useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export default function App() {
  const [circlePositions, setCirclePositions] = useState<MousePosition[]>([]);
  
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setCirclePositions([...circlePositions, { x: clientX, y: clientY }]);
  };

  const handleUndo = () => {
    setCirclePositions(circlePositions.slice(0, -1));
  };

  const handleDeleteAll = () => {
    setCirclePositions([]);
  };

  return (
    <>
    <div className='bg-slate-500 pt-8'>
        <div className='flex gap-4 justify-center'>
            <button onClick={handleUndo} className='text-black bg-white p-2 rounded hover:text-white hover:bg-black'>Undo</button>
            <button onClick={handleDeleteAll} className='text-black bg-white p-2 rounded hover:text-white hover:bg-black'>Delete All</button>
        </div>
     <div className='font-bold text-white text-3xl'>
        click to draw a circle:
     </div>
     <hr />
      <div className='w-screen h-screen bg-slate-500' onClick={handleClick}>
        <div>
          {circlePositions.map((position, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'red',
              }}
            />
            ))}
            </div>
        </div>
      </div>
      
    </>
  );
}
