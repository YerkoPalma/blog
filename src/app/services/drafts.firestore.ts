import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Draft } from '../models/draft';

@Injectable({
    providedIn: 'root'
})
export class DraftsFirestore extends FirestoreService<Draft> {
    protected basePath = 'drafts';

}
