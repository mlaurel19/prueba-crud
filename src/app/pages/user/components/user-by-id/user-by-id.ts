import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-by-id',
  imports: [],
  templateUrl: './user-by-id.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserById { }
