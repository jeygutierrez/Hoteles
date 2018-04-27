class User{
  constructor(pId, pFirstName, pSecondName, pFirstSurname, pSecondSurname, pEmail, pPassword, pUserRole){
    this.id = pId;
    this.firstName = pFirstName;
    this.secondName = pSecondName;
    this.firstSurname = pFirstSurname;
    this.secondSurname = pSecondSurname;
    this.email = pEmail;
    this.password = pPassword;
    this.userRole = pUserRole;
  }

  // funciones para obtener datos
  getFirstName(){
    return this.firstName;
  }
  getEmail(){
    return this.email;
  }
  getPassword(){
    return this.password;
  }
  getUserRole(){
    return this.userRole;
  }
  getId(){
    return this.id;
  }


  // funciones para actualizar
  setFirstName(pNewFirstName){
    this.firstName = pNewFirstName;
  }
  setSecondName(pNewSecondName){
    this.secondName = pNewSecondName;
  }
  setFirstSurname(pNewFirstSurname){
    this.firstSurname = pNewFirstSurname;
  }
  setSecondSurname(pNewSecondSurname){
    this.secondSurname = pNewSecondSurname;
  }
}

// Cliente
class Client extends User{
  constructor(pId, pFirstName, pSecondName, pFirstSurmane, pSecondSurname, pEmail, pPassword, pUserRole, pBirthdate, pPhone){
    super(pId, pFirstName, pSecondName, pFirstSurmane, pSecondSurname, pEmail, pPassword, pUserRole);
    this.birthdate = pBirthdate;
    this.phone = pPhone;
  }
  getPhone(){
    return this.phone;
  }
  getBirthdate(){
    return this.birthdate;
  }
  setPhone(pNewPhone){
    this.phone = pNewPhone;
  }
  setBirthdate(pNewBirthdate){
    this.birthdate = pNewBirthdate;
  }
}

// Administrador
class Admin extends User{
  constructor(pFirstName, pSecondName, pFirstSurname, pSecondSurname, pId, pEmail, pPassword, pRole){
    super(pFirstName, pSecondName, pFirstSurname, pSecondSurname, pId, pEmail, pPassword, pRole)
  }
}

class Hotel{
  constructor(pId, pHotelName, pPhoto, pLatitude, pLongitude, pProvincia, pCanton, pDistrito, pAddress, pPhone, pCustServEmail, pReservEmail, pReservPhone){
    this._id = pId;
    this.hotelName = pHotelName;
    this.photo = pPhoto;
    this.latitude = pLatitude;
    this.longitude = pLongitude;
    this.provincia = pProvincia;
    this.canton = pCanton;
    this.distrito = pDistrito;
    this.address = pAddress;
    this.phone = pPhone;
    this.custServEmail = pCustServEmail;
    this.reservEmail = pReservEmail;
    this.reservPhone = pReservPhone;
  }

// Obtener
  getId(){
    return this._id;
  }
  getHotelName(){
    return this.hotelName;
  }
  getLocation(){
    return `${this.latitude}, ${this.longitude}`;
  }
  getProvincia(){
    return JSON.parse(this.provincia);
  }
  getCanton(){
    return JSON.parse(this.canton);
  }
  getDistrito(){
    return JSON.parse(this.distrito);
  }
  getAddress(){
    return this.address;
  }
  getPhone(){
    return this.phone;
  }
  getCustServEmail(){
    this.custServEmail;
  }
  getReservEmail(){
    return this.reservEmail;
  }
  getReservPhone(){
    return this.reservPhone;
  }
  getFotoHotel(){
    return this.photo;
  }

// Actualizar
  setHotelName(pNewHotelName){
    this.hotelName = pNewHotelName;
  }
  setLatitude(pNewLatitude){
    this.latitude = pNewLatitude;
  }
  setLongitude(pNewLongitude){
    this.longitude = pNewLongitude;
  }
  setProvincia(pNewProvincia){
    this.provincia = pNewProvincia;
  }
  setCanton(pNewCanton){
    this.canton = pCanton;
  }
  setDistrito(pNewDistrito){
    this.distrito = pDistrito;
  }
  setAddress(pNewAddress){
    this.address = pNewProvincia;
  }
  setPhone(pNewPhone){
    this.phone = pNewPhone;
  }
  setCustServEmail(pNewCustServEmail){
    this.custServEmail = pNewCustServEmail;
  }
  setReservEmail(pNewReservEmail){
    this.reservEmail = pNewReservEmail;
  }
  setReservPhone(pNewReservPhone){
    this.reservPhone = pNewReservPhone;
  }
}