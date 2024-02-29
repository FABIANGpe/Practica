import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';

export const routes: Routes = [
{
path: '',
component: PrimerDiaComponent


},

{
path: 'primer-dia',
component: PrimerDiaComponent




},
{
path: 'segundo-dia',
component: SegundoDiaComponent

}
];