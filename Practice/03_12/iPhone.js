class IPhone {
  constructor(
    name,
    color,
    yearOld,
    phoneCase,
    screenProtector,
    glitter,
    screenOn
  ) {
    (this.name = name),
      (this.color = color),
      (this.yearOld = yearOld),
      (this.accessories = {
        phoneCase,
        screenProtector,
        glitter,
      });
    this.screenOn = screenOn;
  }
  powerButton(powerStatus) {
    this.screenOn = powerStatus;
  }
  newAccessories(phoneCase, screenProtector, glitter) {
    this.accessories.phoneCase = phoneCase;
    this.accessories.screenProtector = screenProtector;
    this.accessories.glitter = glitter;
  }
}
export default IPhone;
