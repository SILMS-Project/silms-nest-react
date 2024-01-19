export interface ScheduleUnitColor {
    icon: string;
    bg: string;
    textColor: string;
  }
  
  export interface ScheduleUnitColorEntry {
    [key: string]: ScheduleUnitColor;
  }
  
  export interface ScheduleItems {
    scheduleId: string;
    courseCode: string;
    lecturerName: string;
    startTime: string;
    endTime: string;
    color: ScheduleUnitColor;
  }
  
  export const scheduleUnitColors: ScheduleUnitColorEntry[] = [
    {
      red: {
        icon: "/assets/icons/red-schedules-icon.svg",
        bg: "bg-[#FD6B654A]",
        textColor: "#F92501",
      },
    },
    {
      green: {
        icon: "/assets/icons/green-schedules-icon.svg",
        bg: "bg-[#CFF7EE]",
        textColor: "text-[#076A52]",
      },
    },
    {
      blue: {
        icon: "/assets/icons/blue-schedules-icon.svg",
        bg: "bg-[#27A2DB45]",
        textColor: "text-[#076A52]",
      },
    },
    {
      yellow: {
        icon: "/assets/icons/yellow-schedules-icon.svg",
        bg: "bg-[#27A2DB45]",
        textColor: "text-[#076A52]",
      },
    },
    {
      purple: {
        icon: "/assets/icons/purple-schedules-icon.svg",
        bg: "bg-[#9747FF21]",
        textColor: "text-[#8840E5]",
      },
    },
    {
      brown: {
        icon: "/assets/icons/brown-schedules-icon.svg",
        bg: "bg-[#9747FF21]",
        textColor: "text-[#8840E5]",
      },
    },
  ];
  
  export const getRandomColor = (() => {
    let shuffledColors: ScheduleUnitColor[] = [];
  
    const shuffleColors = () => {
      shuffledColors = scheduleUnitColors
        .map(colorEntry => Object.values(colorEntry)[0])
        .sort(() => Math.random() - 0.5);
    };
  
    let currentIndex = 0;
  
    return (): ScheduleUnitColor => {
      if (currentIndex === 0) {
        shuffleColors();
      }
  
      const color = shuffledColors[currentIndex];
      currentIndex = (currentIndex + 1) % shuffledColors.length;
  
      return color;
    };
  })();


  export const scheduleUnits: ScheduleItems[] = [
    {
      scheduleId: "1",
      courseCode: "MTH 101",
      lecturerName: "Dr. Kingsley Muka",
      startTime: "10:00",
      endTime: "11:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "3",
      courseCode: "PHY 108",
      lecturerName: "Dr. Ronke Adebayo",
      startTime: "12:00",
      endTime: "12:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "5",
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "3",
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "5",
      courseCode: "MTH 101",
      lecturerName: "Dr. Kingsley Muka",
      startTime: "10:00",
      endTime: "11:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "3",
      courseCode: "GST 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "4",
      courseCode: "PHY 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "3",
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "5",
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "5",
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "5",
      courseCode: "MTH 101",
      lecturerName: "Dr. Kingsley Muka",
      startTime: "10:00",
      endTime: "11:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "2",
      courseCode: "GST 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      color: getRandomColor(),
    },
    
    {
      scheduleId: "4",
      courseCode: "GST 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "1",
      courseCode: "PHY 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "5",
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "2",
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "3",
      courseCode: "MTH 101",
      lecturerName: "Dr. Kingsley Muka",
      startTime: "10:00",
      endTime: "11:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "2",
      courseCode: "GST 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "1",
      courseCode: "PHY 101",
      lecturerName: "Dr. Adaora Nwosu",
      startTime: "13:00",
      endTime: "13:50",
      color: getRandomColor(),
    },
    {
      scheduleId: "1",
      courseCode: "CSC 102",
      lecturerName: "Dr. Ronke Nwosu",
      startTime: "16:00",
      endTime: "16:50",
      color: getRandomColor(),
    },
  ];