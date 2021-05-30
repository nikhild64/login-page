import { Component, Input} from '@angular/core';

@Component({
  selector: 'lib-loginlib',
  template: `
  <div class="container">
  <div class="box">
    <div class="content">

      <h3>Login to {{websiteName}} </h3>
      <lib-input-with-label [label]='"Username"' [inputType]='"text"' ></lib-input-with-label>
      <lib-input-with-label  [label]='"Password"' [inputType]='"password"' ></lib-input-with-label>
      <div class="login-button">
        <div class="material-icons md-36" >login</div>

        <input type="button" [value]="activity">


      </div>
      <div class="sign-up" (click)="switchMode()" >
        <p>
          {{activity==='Login'?'Sign Up?':'Login?'}}
        </p>
      </div>
    </div>


  </div>

</div>

  `,
  styles: [
    `$primary-text-color:#12005e;
    .container {
      height: 100%;
      width: 100%;
      background-color: #e1bee7;

      .box {
        padding-top: 5rem;

        height: 100%;
        .content {
          background-color: #f3e5f5;

          padding-top: 40px;
          margin: 0 auto;
          border: 0.5px thick #d500f9;
          border-radius: 20px;
          height: max-content;
          width: 60%;
          box-shadow: 20px 20px 20px 1px #ab47bc;
          h3 {
            text-align: center;
            font-family: "Maven Pro", sans-serif;
            font-size: 2rem;
            margin-bottom: 20px;
            text-shadow: 6px 4px 20px #7b1fa2;
            color: $primary-text-color;
          }
          app-input-with-label {
            display: flex;
            flex-direction: column;
            margin: 10px;
          }
          .login-button {
            color: white;
            width: 80%;
            margin: 0 auto;
            position: relative;
            margin-top: 30px;
            div.material-icons {
              padding: 8px;
              position: absolute;
              height: 100%;
              padding-left: 30px;
            }
          }
          .login-button > input[type="button"] {
            color: white;
            height: 2.5rem;
            width: 100%;
            background-color: #ab47bc;
            border-width: 1px;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 5px;
            border-radius: 10px;
            border-color: #9c27b0;
          }
          .sign-up{
            p{
              text-align: end ;
              cursor: pointer;
              padding: 20px;
              color: $primary-text-color;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 600px) {
      .container {

        .box {

          .content {
            height: max-content;
            width: 90%;
            .sign-up{
              p{
                text-align: end ;
                cursor: pointer;
                padding-top: 10px;
                color: $primary-text-color;
              }
            }
          }
        }
      }
    }
    `
  ]
})
export class LoginlibComponent  {


  @Input() websiteName:string|undefined = "Website";
  activity='Login'


  switchMode() : void{
    this.activity=this.activity==='Login'?'Signup':'Login';
  }

}
