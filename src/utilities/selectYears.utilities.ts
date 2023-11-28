const generateYearList = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
  
    for (let year = currentYear; year >= startYear; year--) {
      years.push({ label: year.toString(), value: year });
    }
  
    return years;
  };
  
  export default generateYearList;
  