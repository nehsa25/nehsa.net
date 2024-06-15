import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from "../../shared-components/comment/comment.component";

@Component({
    selector: 'app-dot',
    standalone: true,
    templateUrl: './dot.component.html',
    styleUrl: './dot.component.scss',
    imports: [MatCardModule, CommentComponent]
})
export class DotComponent {

}
