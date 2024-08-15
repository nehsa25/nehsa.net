import { Component, ViewChild, ElementRef  } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-copy',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './copy.component.html',
  styleUrl: './copy.component.scss'
})
export class CopyComponent {
  @ViewChild('copyButton', { static: false }) copyButton: ElementRef | undefined;
  @ViewChild('.copy-container', { static: false, read: ElementRef }) copyContainer: ElementRef | undefined;

  copyText: string = "";
  isMouseDown = false;
  constructor(public clipboard: Clipboard) { 

  }
  getCopyText() {
    const copyContainer = this.copyButton?.nativeElement.closest('.copy-container');
    if (copyContainer) {
      const content = copyContainer.textContent;
      this.copyText = content.trim().replace("content_copy", "");
      this.clipboard.copy(this.copyText);
    } else {
      console.error('No .copy-container found');
    }
  }
}
