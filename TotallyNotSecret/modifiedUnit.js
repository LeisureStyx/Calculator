class Units{
  constructor(Title, Name, UnitNumber, Element) {
    this.Title = Title;
    this.Name = Name;
    this.Fullname = Title + " " + Name;
    this.UnitNumber = UnitNumber;
    this.Element = Element;
  }
}

const element = ["Fire", "Water", "Earth", "Thunder", "Light", "Dark"];
const seria = new Units("Ruby Summoner", "Seria", 8589, element[0]);
const vail = new Units("Glacial", "Vail &amp; Vidron", 8396, element[1]);
const nia = new Units("Maverick of Elysia", "Nia", 8452, element[2]);
const daltisk = new Units("True Revelation", "Daltisk", 1745, element[3]);
const ionia = new Units("Metal Flower", "Ionia", 1588, element[4]);
const shion = new Units("Disnomian Emperor", "Shion", 1590, element[5]);