%lex

%{
var keywords = [
//  'int8', 'uint8', 'int16', 'uint16', 'int32', 'uint32', 'int64', 'uint64',
//  'char', 'short', 'int', 'log', 'bool', 'float', 'double',
  'typedef', 'struct', 
];
%}

%%
\s+                     {/* whitespace */}
[_a-zA-Z][_a-zA-Z0-9]*  {return keywords.indexOf(yytext) === -1 ? "IDENTIFER" : yytext.toUpperCase();}
[\{\};]                 {return yytext;}

/lex

%start program

%%

program
    : stmt_list
        {return $$ = $1}
    ;

stmt_list
    : stmt
        {$$ = (function () {var list = new yy.ast.List(); list.push($1); return list;})()}
    | stmt_list stmt
        {$$.push($2);}
    ;

stmt
    : struct_stmt
        {$$ = $1;}
    ;

struct_stmt
    : STRUCT IDENTIFER '{' variable_list '}' ';'
        {$$ = new yy.ast.Struct($2, $4);}
    ;

variable_list
    : variable
        {$$ = new yy.ast.VariableList().push($1);}
    | variable_list variable
        {$$.push($2);}
    ;

variable
    : IDENTIFER IDENTIFER ';'
        {$$ = new yy.ast.Variable($1, $2);}
    ;
