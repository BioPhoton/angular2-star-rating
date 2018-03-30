import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ClickEvent } from '../interfaces/click-event.interface';
import { HoverRatingChangeEvent } from '../interfaces/hover-rating-change-event.interface';
import { RatingChangeEvent } from '../interfaces/rating-change-event.interface';
import { StarRating } from '../services/star-rating';
import { StarRatingConfigService } from '../services/star-rating-config.service';
export declare class StarRatingComponent extends StarRating implements ControlValueAccessor {
    clickEmitter: EventEmitter<ClickEvent>;
    saveOnClick($event: ClickEvent): void;
    ratingChangeEmitter: EventEmitter<RatingChangeEvent>;
    saveOnRatingChange($event: RatingChangeEvent): void;
    hoverRatingChangeEmitter: EventEmitter<HoverRatingChangeEvent>;
    saveOnHover($event: HoverRatingChangeEvent): void;
    onTouch: Function;
    onModelChange: Function;
    private onModelChangeRegistered;
    private onTouchRegistered;
    saveOnTouch(): void;
    saveOnModelChange(value: number): void;
    /**ACCESSIBILITY **/
    onKeyDown(event: KeyboardEvent): void;
    onBlur(event: FocusEvent): void;
    onFocus(event: FocusEvent): void;
    onStarHover(rating?: number): void;
    /**Form Control - ControlValueAccessor implementation**/
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    constructor(config: StarRatingConfigService);
    setRating(value: number): void;
    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param rating
     */
    onStarClicked(rating: number): void;
}