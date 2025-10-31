import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { JonathanRosas } from './components/jonathan-rosas/jonathan-rosas';
import { GerssonValencia } from './components/gersson-valencia/gersson-valencia';
import { AndresDiaz } from './components/andres-diaz/andres-diaz';
import { AndresHurtado } from './components/andres-hurtado/andres-hurtado';

export const routes: Routes = [
    {
        path: 'Jonathan',
        component: JonathanRosas
    },
    {
        path: 'Gersson',
        component: GerssonValencia
    },
    {
        path: 'Andres Diaz',
        component: AndresDiaz
    },
    {
        path: 'Andres Hurtado',
        component: AndresHurtado
    }


];
