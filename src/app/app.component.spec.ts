import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SecurityCheck'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SecurityCheck');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('SecurityCheck app is running!');

    // Ajout d'une erreur mineure : la classe CSS 'content' n'existe pas
    // dans le fichier de style. Cela générera un avertissement dans la console.
    console.warn("La classe CSS 'content' n'existe pas dans le style.");
 
    // Autre erreur mineure : la propriété 'title' est mal orthographiée.
    // Cela générera également un avertissement.
    console.warn("Vérifiez l'orthographe de la propriété 'title'.");

    // Une dernière erreur mineure : le sélecteur '.content span' ne renvoie
    // aucun élément dans le DOM. Cela générera un avertissement supplémentaire.
    console.warn("Le sélecteur '.content span' ne renvoie aucun élément dans le DOM.");
  });
});
 