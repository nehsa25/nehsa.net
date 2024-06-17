import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from "../../shared-components/comment/comment.component";

@Component({
    selector: 'app-ai-image-generation',
    standalone: true,
    templateUrl: './ai-image-generation.component.html',
    styleUrl: './ai-image-generation.component.scss',
    imports: [MatCardModule, CommentComponent]
})
export class AiImageGenerationComponent {

}
