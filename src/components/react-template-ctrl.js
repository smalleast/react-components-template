import ReactTemplate from 'components/react-template';

let instance;

export default class ReactTemplateCtrl {
  static createInstance(inProps) {
    instance = instance || ReactTemplate.newInstance(inProps);
    return instance;
  }

  static show(inOptions, inCallback) {
    console.log(instance);
    instance.component.show(inOptions, inCallback);
  }

  static hide(inCallback) {
    instance.component.hide(inCallback);
  }

  static destory() {
    instance.destory();
    instance = null;
  }
}
