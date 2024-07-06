// Importações
import { TestBed } from '@angular/core/testing';
import { Component17Component } from './component17.component';

// Estrutura do teste unitário
describe('Testing componente 17', () => {

  // Inicialization
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component17Component]
    }).compileComponents();
  });

  // Validate the text variable
  it('Validate the variable name', () => {

    // Fixture
    const fixture = TestBed.createComponent(Component17Component);

    // Get the component variables and functions
    const component = fixture.componentInstance;

    // Validation
    expect(component.name).toEqual('Joao');

  });

  // Validate the variable average
  it('Validate the variable average', () => {

    // Fixture
    const fixture = TestBed.createComponent(Component17Component);

    // Get the component variables and functions
    const component = fixture.componentInstance;

    // Validation
    expect(component.average).toEqual(0);

  });

  // Validate the calculate method return
  it('Validate the calculate method return', () => {
    
    // Fixture
    const fixture = TestBed.createComponent(Component17Component);

    // Get the component variables and functions
    const component = fixture.componentInstance;

    // Run function
    const result = component.calculation(10, 8);

    // Validation
    expect(result).toEqual(9);

  });

  // Check if the initialization of the average variable is 0 and after executing the calculation function,
  // the value is assigned to the average variable
 it('Variable and function', () => {
    
  // Fixture
  const fixture = TestBed.createComponent(Component17Component);

  // Get the component variables and functions
  const component = fixture.componentInstance;

  // Validate whether the average variable has the value 0
  expect(component.average).toEqual(0);

  // Run function
  const retorno = component.calculation(5, 9);

  // Assign the function return to the average variable
  component.average = retorno;

  // Validate whether the average variable has the value 7
  expect(component.average).toEqual(7);

});

});