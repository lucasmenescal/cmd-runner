import * as vscode from 'vscode';
import { createIcon } from './components/activity-bar/icon';

export function activate(context: vscode.ExtensionContext) {
    // Crie o ícone personalizado na barra de atividades
    createIcon(context);

    // Adicione outros recursos e funcionalidades da extensão aqui
}

export function deactivate() {}