#! /usr/bin/python

"""

"""

#import lxml.etree as ET
#import requests
#from bs4 import BeautifulSoup as bs
import re
import os # for walk

dir_name='.'



for subdir, dirs, files in os.walk(dir_name):
    for file in files:
        originalfile=subdir+'/'+file
        targetfile='\\main\\'+originalfile[9:]
        targetfile=targetfile.replace('\\','/')

        if not file.endswith('.html'): #only process html files.
           #print("Skip not html: %s" % file)
           continue
        if subdir.startswith('./v1'): #ignore versions
           #print("Skip subdir: %s" % subdir)
           continue
           
        if subdir.startswith('./main'): #ignore versions
           #print("Skip subdir: %s" % subdir)
           continue

        if subdir.startswith('./en'):
            #print("RootFile: %s" % originalfile)
            continue
            #Handle a root file.

        if subdir == '.':
            #print("RootFile: %s" % originalfile)
            continue
            #Handle a root file.
           
        if subdir.startswith('./master'): #ignore versions
           print("DO: %s" % subdir)
           #continue
        

        print("OrigFile: %s" % originalfile)
        print("TargetFile text: %s" % targetfile)
        print("Subdir: %s" % subdir )
        
        redirect_file_text="""<!DOCTYPE HTML>
<html data-proofer-ignore>
<head>
<meta charset='UTF-8'>
<title>Redirecting to latest version of document (main)</title>
<link rel='canonical' href='%s'>
<meta http-equiv=refresh content='0; url=%s'>
</head>
<body>
<h1>Redirecting to latest version of document</h1>
<p><a href='%s'>Click here if you are not redirected</a></p>
<script>window.location.href='%s';</script>
</body></html>
""" % (targetfile,targetfile,targetfile,targetfile)
        print("redirect_file_text: %s" % redirect_file_text)
        
        #write the file
        with open(originalfile, 'w') as content_file:
            content_file.write(redirect_file_text)
        
        """
           
        xml_file_name = xml_message_definitions_dir_name+file
        with open(xml_file_name, 'r') as content_file:
            xml_file = content_file.read()
            dom = ET.fromstring(xml_file)
            transform = ET.XSLT(xslt)
            newdom = transform(dom)

            #Prettify the HTML using BeautifulSoup
            soup=bs(str(newdom), "lxml")
            prettyHTML=soup.prettify()

            #Strip out text before <html> tag in XSLT output
            prettyHTML=strip_text_before_string(prettyHTML,'<html>')
            prettyHTML = fix_content_in_tags(prettyHTML)
            
            #Replace invalid file extensions (workaround for xslt)
            prettyHTML = fix_include_file_extension(prettyHTML)

            #Replace space markers with intentional space
            prettyHTML = fix_replace_space_marker(prettyHTML)
            
            #Write output html file
            output_file_name_html = file.rsplit('.',1)[0]+".html"

            output_file_name_html_withdir = output_dir_html+output_file_name_html
            print("Output filename (html): %s" % output_file_name_html)

            with open(output_file_name_html_withdir, 'w') as out:
                out.write(prettyHTML)


            #Write output markdown file
            output_file_name_prefix = file.rsplit('.',1)[0]

            markdown_text=''
            #Inject a heading and doc-type intro (markdown format)
            markdown_text = inject_top_level_docs(markdown_text,file)

            output_file_name_md_withdir = output_dir+output_file_name_prefix+'.md'
            print("Output filename (md): %s" % output_file_name_md_withdir)

            with open(output_file_name_md_withdir, 'w') as out:
                out.write(markdown_text)

            # Create sortable list of output file names
            if not file=='common.xml':
                dialect_files.add(output_file_name_prefix)
                
        """
                
            
#for the_file in sorted(dialect_files):
#    index_text+='\n* [%s.xml](%s.md)' % (the_file,the_file)
            
#Write the index
#with open(index_file_name, 'w') as content_file:
#    content_file.write(index_text)

print("COMPLETED")



