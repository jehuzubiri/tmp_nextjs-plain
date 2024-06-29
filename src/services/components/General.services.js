/* eslint-disable import/no-anonymous-default-export */

class GeneralServices {
  constructor() {
    this.param = {
      'populate[0]': 'header.menu',
      'populate[1]': 'header.button',
    };
  }

  //@DESC: Get Layout Datas
  getAppLayout() {
    return { label: 'sample response' };
  }
}
export default new GeneralServices();
