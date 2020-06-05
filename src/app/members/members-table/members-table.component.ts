import { Component, Input } from "@angular/core";

import { MemberEntity } from "../models/member.model";
import { MembersApiService } from "../members-api.service";

@Component({
  selector: "app-members-table",
  templateUrl: "./members-table.component.html",
  styles: [],
})
export class MembersTableComponent {
  members: MemberEntity[];
  @Input() organization: string = "lemoncode";
  existe: boolean = true;

  constructor(private membersApi: MembersApiService) {}

  loadMembers() {
    this.membersApi.getAllMembers(this.organization).subscribe(
      (ms) => {
        this.members = ms;
        this.existe = true;
      },
      (error) => {
        console.log(error);
        this.existe = false;
      }
    );
  }
}
