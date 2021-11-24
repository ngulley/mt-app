import {Injectable} from "@angular/core";

@Injectable()
export class AppConstants {
  public static MESSAGES = class {
    public static SERVICE_ERROR = 'The application encountered an unexpected service error. Please contact the site support team.';
  }
}
