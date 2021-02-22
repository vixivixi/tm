# tm

some description

[alias]

    -- инициализировать гита
    git init

    -- заливаем вновь созданный гит в облако
    git remote add origin https://github

    -- склонировать гита
    git clone http git

    git #### - показать текущий статус файлов кратко
    s = status --short - показать текущий статус файлов
    st = status - показать коммиты оформленые и с кодами
    l = log --oneline --graph --decorate --all - показать коммиты оформленые и с кодами и с цветовыми настройками
    g = log --graph --abbrev-commit --decorate --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)' - показать ветки
    br = branch - сделать чекаут
    co = checkout

    git co --index.html

    -- добавить ветку в репо
    git push --set-upstream orgigin branch

    -- переключится на другую ветку
    git co branch

    -- создать и переключится на новую ветку
    git co -b branch

    -- переключится на версию гит.коммита
    -- можно от старых коммитов делать ветвления
    git co #number

    -- переименовавть текущую ветку
    git br -m newBranch

    -- добавить в стейдж
    git add .
    -- удалить из стейджа
    git reset .

    -- добавить коммит
    git commit -m 'comment'
    -- удалить последний коммит и вернутся на один шаг назаад без удаления файлов
    git reset --soft HEAD^1
    -- удалить последний коммит и вернутся на один шаг назаад и удалить все изменения
    git reset --hard HEAD^1

    -- то с чего нужно начинать рабочий день подтягиваем последние исходинки с хоста
    git pull
