import './dev.scss';
import {reactComponentsTemplate, reactComponentsTemplateCtrl} from './main';

class Body extends React.Component {
  _click() {
    reactComponentsTemplateCtrl.hide();
  }

  render() {
    return (
      <div className="cus-body">
        <p><span className="bd">Hi Man!</span></p>
        <p>I am from <strong className="bd">Baidu</strong></p>
        <p><img onClick={this._click.bind(this)} src="http://www.baidu.com/img/bd_logo1.png"/></p>
      </div>
    );
  }
}


class App extends React.Component {
  componentDidMount() {
    console.log('will / did..');
    reactComponentsTemplateCtrl.createInstance({
      backdropOptions: {
        zIndex: 11,
        opacity: 0.1
      }
    });
  }

  _click1() {
    reactComponentsTemplateCtrl.show({
      header: 'Customize <b style="color:#F00">Template</b>',
      body: 'Are you feel <b>good</b> today?',
      theme: 'ios',
      buttons: [
        {
          text: 'option1',
          onClick: function () {
          }
        }, {
          text: 'option2',
          onClick: function (item) {
            console.log('option2', item);
          }
        }, {
          text: 'CLOSE',
          onClick: function (item) {
            reactComponentsTemplateCtrl.hide();
          }
        }
      ]
    });
  }


  _click2() {
    console.log('click2....');
    reactComponentsTemplateCtrl.show({
      header: '<b>Title</b><span style="color:#F00">With Color</span>',
      body: <Body />,
      buttons: []
    });
  }

  _click3() {
    console.log('click3....');
    reactComponentsTemplateCtrl.show({
      header: 'IOS Settings',
      body: 'Are you sure to change this one?',
      theme: 'transparent',
      buttons: [{
        text: 'OK',
        onClick: function (item) {
          reactComponentsTemplateCtrl.hide();
        }
      }]
    });
  }

  _click4() {
    reactComponentsTemplateCtrl.show({
      header: null,
      body: 'NO header content.',
      buttons: [{
        text: 'OK',
        onClick: function (item) {
          reactComponentsTemplateCtrl.hide();
        }
      }]
    });
  }

  _click5() {
    reactComponentsTemplateCtrl.show({
      header: null,
      body: 'NO header content',
      theme: 'ios',
      onClick: function () {
        reactComponentsTemplateCtrl.hide();
      },
      buttons: [{
        text: 'options',
        onClick: function (item) {
          reactComponentsTemplateCtrl.hide();
        }
      }, {
        text: 'OK',
        onClick: function (item) {
          reactComponentsTemplateCtrl.hide();
        }
      }, {
        text: 'close',
        onClick: function (item) {
          reactComponentsTemplateCtrl.hide(() => {
            console.log('close...');
          });
        }
      }]
    }, () => {
      console.log('show....');
    });
  }

  render() {
    return (
      <div className="hello-react-components-template">
        <button onClick={this._click1.bind(this)}>TEST MODAL</button>
        <button onClick={this._click2.bind(this)}>TEST MODAL- Component body</button>
        <button onClick={this._click3.bind(this)}>IOS Alert</button>
        <button onClick={this._click4.bind(this)}>IOS Alert4</button>
        <button onClick={this._click5.bind(this)}>TEST MODAL 5</button>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
