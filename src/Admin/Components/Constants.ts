
// name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
  const barData:any[] = [
    { id: 1, year: 2023, month: "January", orders: 2000, cancel: 300 },
    { id: 2, year: 2023, month: "February", orders: 2200, cancel: 820 },
    { id: 3, year: 2023, month: "March", orders: 1800, cancel: 190 },
    { id: 4, year: 2023, month: "April", orders: 2500, cancel: 350 },
    { id: 5, year: 2023, month: "May", orders: 2300, cancel: 520 },
    { id: 6, year: 2023, month: "June", orders: 2100, cancel: 310 },
    { id: 7, year: 2023, month: "July", orders: 1400, cancel: 730 },
    { id: 8, year: 2023, month: "August", orders: 2000, cancel: 300 },
    { id: 9, year: 2023, month: "September", orders: 2200, cancel: 520 },
    { id: 10, year: 2023, month: "October", orders: 1800, cancel: 890 },
    { id: 11, year: 2023, month: "November", orders: 2500, cancel: 750 },
    { id: 12, year: 2023, month: "December", orders: 2300, cancel: 120 },
  ];
  
  export const BAR_DATA = barData.map(({ month, orders, cancel }) => ({
    name: month,
    uv: orders,
    pv: cancel,
    amt: cancel, // Assuming you want 'amt' to have the same value as 'cancel'
  }));
  

  export const lineData = [
    { id: 1, year: 2023, month: "January", active: 10000 },
    { id: 2, year: 2023, month: "February", active: 11000 },
    { id: 3, year: 2023, month: "March", active: 12000 },
    { id: 4, year: 2023, month: "April", active: 13000 },
    { id: 5, year: 2023, month: "May", active: 14000 },
    { id: 6, year: 2023, month: "June", active: 15000 },
    { id: 7, year: 2023, month: "July", active: 16000 },
    { id: 8, year: 2023, month: "August", active: 17000 },
    { id: 9, year: 2023, month: "September", active: 18000 },
    { id: 10, year: 2023, month: "October", active: 19000 },
    { id: 11, year: 2023, month: "November", active: 20000 },
    { id: 12, year: 2023, month: "December", active: 21000 },
  ];
  

  export const piData=[
     
  ]