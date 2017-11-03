import reactComponentsTemplate from 'components/react-components-template';

let instance;

export default class reactComponentsTemplateCtrl {
  static createInstance(inProps) {
    instance = instance || reactComponentsTemplate.newInstance(inProps);
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
