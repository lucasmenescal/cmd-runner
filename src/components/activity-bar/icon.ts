import * as vscode from 'vscode';

export function createIcon(context: vscode.ExtensionContext) {
    const iconPath = {
        light: context.asAbsolutePath('resources/light/my-icon-light.svg'),
        dark: context.asAbsolutePath('resources/dark/my-icon-dark.svg')
    };
    
    const myExtension = vscode.extensions.getExtension('myExtension.myExtension');
    const myExtensionId = myExtension?.id ?? 'myExtension.myExtension';
    
    const myCommandId = 'myExtension.createIcon';
    
    const myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
    myStatusBarItem.text = '$(symbol-event) My Extension';
    myStatusBarItem.command = myCommandId;
    myStatusBarItem.tooltip = 'My Extension';
    myStatusBarItem.color = new vscode.ThemeColor('statusBar.foreground');
    myStatusBarItem.show();
    
    context.subscriptions.push(myStatusBarItem);
    
    const myIcon = vscode.window.createWebviewPanel(
        'myExtension.icon',
        'My Extension Icon',
        vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true
        }
    );
    
    myIcon.iconPath = iconPath;
    myIcon.webview.html = '<html><body><h1>My Extension Icon</h1></body></html>';
    
    context.subscriptions.push(myIcon);
    
}

