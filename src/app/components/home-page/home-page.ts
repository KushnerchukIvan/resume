import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  inject,
  NgZone,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit, OnDestroy {
  @Input() words: string[] = ['Frontend Developer', 'Angular Specialist', 'TypeScript Engineer'];
  @Input() speed = 80;

  displayText = signal('');

  private wordIndex = 0;
  private charIndex = 0;
  private isDeliting = false;
  private pauseLeft = 0;
  private sub!: Subscription;

  ngOnInit(): void {
    this.sub = interval(this.speed).subscribe(() => this.tick());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private tick(): void {
    if (this.pauseLeft > 0) {
      this.pauseLeft--;
      return;
    }

    const word = this.words[this.wordIndex];

    if (!this.isDeliting) {
      this.displayText.set(word.slice(0, ++this.charIndex));
      if (this.charIndex === word.length) {
        this.isDeliting = true;
        this.pauseLeft = 20;
      }
    } else {
      this.displayText.set(word.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.isDeliting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }
  }
}
