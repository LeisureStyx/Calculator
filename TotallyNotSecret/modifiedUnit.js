class Units{
  constructor(Title, Name, UnitNumber, Element) {
    this.Title = Title;
    this.Name = Name;
    this.Fullname = Title + " " + Name;
    this.UnitNumber = UnitNumber;
    this.Element = Element;
  }
}

const input = document.getElementById("input");
const unitJSON = `[
  {    
    "Title": "Ruby Summoner",    
    "Name": "Seria",    
    "Fullname": "Ruby Summoner Seria",    
    "UnitNumber": 8589,    
    "Element": "Fire"  
  },  
  {    
    "Title": "Glacial",    
    "Name": "Vail & Vidron",    
    "Fullname": "Glacial Vail & Vidron",    
    "UnitNumber": 8396,    
    "Element": "Water"  
  },  
  {    
    "Title": "Maverick of Elysia",    
    "Name": "Nia",    
    "Fullname": "Maverick of Elysia Nia",    
    "UnitNumber": 8452,    
    "Element": "Earth"  
  },  
  {    
    "Title": "True Revelation",    
    "Name": "Daltisk",    
    "Fullname": "True Revelation Daltisk",    
    "UnitNumber": 1745,    
    "Element": "Thunder"  
  },  
  {    
    "Title": "Metal Flower",    
    "Name": "Ionia",    
    "Fullname": "Metal Flower Ionia",    
    "UnitNumber": 1588,    
    "Element": "Light"  
  },  
  {    
    "Title": "Disnomian Emperor",    
    "Name": "Shion",    
    "Fullname": "Disnomian Emperor Shion",    
    "UnitNumber": 1590,    
    "Element": "Dark"  
  }
]`;
const units = JSON.parse(unitJSON);
console.log(units)

input.addEventListener("keypress", event => {
  if(event.key === "Enter") {
    const value = parseInt(event.target.value)
    switch (value) {
      case 1:
        document.getElementById("unitName").innerHTML = units[0].Fullname;
        document.getElementById("unitNumber").innerHTML = units[0].UnitNumber;
        document.getElementById("unitElement").innerHTML = units[0].Element;
        break;
      case 2:
        document.getElementById("unitName").innerHTML = units[1].Fullname;
        document.getElementById("unitNumber").innerHTML = units[1].UnitNumber;
        document.getElementById("unitElement").innerHTML = units[1].Element;
        break;
      case 3:
        document.getElementById("unitName").innerHTML = units[2].Fullname;
        document.getElementById("unitNumber").innerHTML = units[2].UnitNumber;
        document.getElementById("unitElement").innerHTML = units[2].Element;
        break;
      case 4:
        document.getElementById("unitName").innerHTML = units[3].Fullname;
        document.getElementById("unitNumber").innerHTML = units[3].UnitNumber;
        document.getElementById("unitElement").innerHTML = units[3].Element;
        break;
      case 5:
        document.getElementById("unitName").innerHTML = units[4].Fullname;
        document.getElementById("unitNumber").innerHTML = units[4].UnitNumber;
        document.getElementById("unitElement").innerHTML = units[4].Element;
        break;
      case 6:
        document.getElementById("unitName").innerHTML = units[5].Fullname;
        document.getElementById("unitNumber").innerHTML = units[5].UnitNumber;
        document.getElementById("unitElement").innerHTML = units[5].Element;
        break;
      default:
        document.getElementById("unitName").innerHTML = "";
        document.getElementById("unitNumber").innerHTML = "";
        document.getElementById("unitElement").innerHTML = "";
        break;
    }
  }
})